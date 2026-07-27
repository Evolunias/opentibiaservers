import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-mexico');
}

export default function NoResetGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-mexico" />;
}
