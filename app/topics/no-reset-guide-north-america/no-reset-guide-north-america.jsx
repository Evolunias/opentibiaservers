import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-north-america');
}

export default function NoResetGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-north-america" />;
}
