import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-brazil');
}

export default function NoResetGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-brazil" />;
}
