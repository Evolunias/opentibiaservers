import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-guide');
}

export default function NoResetTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-guide" />;
}
