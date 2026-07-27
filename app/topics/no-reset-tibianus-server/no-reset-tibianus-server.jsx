import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-server');
}

export default function NoResetTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-server" />;
}
