import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-season');
}

export default function OxygenotSeasonKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-season" />;
}
