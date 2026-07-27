import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-private-server');
}

export default function NoResetTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-private-server" />;
}
