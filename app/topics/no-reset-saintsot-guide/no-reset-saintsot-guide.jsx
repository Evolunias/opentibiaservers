import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-guide');
}

export default function NoResetSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-guide" />;
}
