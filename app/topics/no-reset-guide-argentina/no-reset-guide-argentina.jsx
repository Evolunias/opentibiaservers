import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-argentina');
}

export default function NoResetGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-argentina" />;
}
