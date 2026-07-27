import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-ot-server');
}

export default function NoResetTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-ot-server" />;
}
