import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-guide');
}

export default function NoResetAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-guide" />;
}
