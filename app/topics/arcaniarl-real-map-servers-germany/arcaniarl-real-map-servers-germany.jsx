import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-germany');
}

export default function ArcaniarlRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-germany" />;
}
