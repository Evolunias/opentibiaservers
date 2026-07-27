import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-europe-server');
}

export default function KasteriaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-europe-server" />;
}
