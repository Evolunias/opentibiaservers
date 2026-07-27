import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-canada-server');
}

export default function KasteriaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-canada-server" />;
}
