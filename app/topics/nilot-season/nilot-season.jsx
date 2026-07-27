import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-season');
}

export default function NilotSeasonKeywordPage() {
  return <StaticKeywordPage slug="nilot-season" />;
}
