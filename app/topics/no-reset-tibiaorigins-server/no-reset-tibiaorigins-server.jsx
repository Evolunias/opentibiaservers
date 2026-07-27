import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-server');
}

export default function NoResetTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-server" />;
}
