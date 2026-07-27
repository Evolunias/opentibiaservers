import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-south-america');
}

export default function OlderaFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-south-america" />;
}
