import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-poland');
}

export default function ArcaniarlRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-poland" />;
}
