import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-ots');
}

export default function NoResetTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-ots" />;
}
