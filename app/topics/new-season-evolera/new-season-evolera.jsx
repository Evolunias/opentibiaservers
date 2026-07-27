import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera');
}

export default function NewSeasonEvoleraKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera" />;
}
