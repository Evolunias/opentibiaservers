import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-canada');
}

export default function ArcaniarlRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-canada" />;
}
