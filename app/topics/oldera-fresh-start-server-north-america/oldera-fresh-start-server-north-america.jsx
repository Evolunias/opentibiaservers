import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-north-america');
}

export default function OlderaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-north-america" />;
}
