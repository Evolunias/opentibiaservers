import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaorigins-client');
}

export default function NoResetTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaorigins-client" />;
}
