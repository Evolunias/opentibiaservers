import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-uk');
}

export default function ArcaniarlRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-uk" />;
}
