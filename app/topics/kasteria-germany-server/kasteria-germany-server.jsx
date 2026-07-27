import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-germany-server');
}

export default function KasteriaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-germany-server" />;
}
