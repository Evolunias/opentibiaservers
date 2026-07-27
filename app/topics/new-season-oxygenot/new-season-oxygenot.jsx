import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot');
}

export default function NewSeasonOxygenotKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot" />;
}
