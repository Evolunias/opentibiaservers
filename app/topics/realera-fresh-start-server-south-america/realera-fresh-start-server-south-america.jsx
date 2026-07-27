import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-south-america');
}

export default function RealeraFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-south-america" />;
}
