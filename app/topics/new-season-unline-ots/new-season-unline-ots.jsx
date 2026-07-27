import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-ots');
}

export default function NewSeasonUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-ots" />;
}
