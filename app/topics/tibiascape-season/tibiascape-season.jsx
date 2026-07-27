import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-season');
}

export default function TibiascapeSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-season" />;
}
