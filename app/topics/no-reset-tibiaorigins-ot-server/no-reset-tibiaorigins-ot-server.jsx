import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-ot-server');
}

export default function NoResetTibiaoriginsOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-ot-server" />;
}
