import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-guide');
}

export default function CustomAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-guide" />;
}
