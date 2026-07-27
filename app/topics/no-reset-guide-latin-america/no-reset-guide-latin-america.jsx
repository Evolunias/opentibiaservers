import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-latin-america');
}

export default function NoResetGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-latin-america" />;
}
