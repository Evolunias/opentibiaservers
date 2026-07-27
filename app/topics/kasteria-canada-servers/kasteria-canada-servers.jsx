import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-canada-servers');
}

export default function KasteriaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-canada-servers" />;
}
