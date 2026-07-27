import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera');
}

export default function NewSeasonBlazeraKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera" />;
}
