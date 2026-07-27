import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-private-server');
}

export default function NoResetTibiaoriginsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-private-server" />;
}
