import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-north-america');
}

export default function ArcaniarlRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-north-america" />;
}
