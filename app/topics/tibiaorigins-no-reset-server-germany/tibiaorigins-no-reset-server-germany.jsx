import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-no-reset-server-germany');
}

export default function TibiaoriginsNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-no-reset-server-germany" />;
}
