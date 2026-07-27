import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-sweden');
}

export default function NoResetGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-sweden" />;
}
