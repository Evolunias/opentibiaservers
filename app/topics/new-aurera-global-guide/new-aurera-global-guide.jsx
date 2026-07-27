import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-guide');
}

export default function NewAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-guide" />;
}
