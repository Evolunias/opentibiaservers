import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-season');
}

export default function EvoluniaSeasonKeywordPage() {
  return <StaticKeywordPage slug="evolunia-season" />;
}
