import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-europe');
}

export default function ArcaniarlRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-europe" />;
}
