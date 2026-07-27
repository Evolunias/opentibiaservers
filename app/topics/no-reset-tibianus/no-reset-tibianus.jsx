import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus');
}

export default function NoResetTibianusKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus" />;
}
