import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-europe-servers');
}

export default function KasteriaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-europe-servers" />;
}
