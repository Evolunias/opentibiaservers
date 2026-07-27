import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot');
}

export default function NewSeasonThaisotKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot" />;
}
