import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-guide');
}

export default function ActiveAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-guide" />;
}
