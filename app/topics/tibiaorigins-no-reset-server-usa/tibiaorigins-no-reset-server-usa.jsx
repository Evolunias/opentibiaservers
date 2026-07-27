import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-no-reset-server-usa');
}

export default function TibiaoriginsNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-no-reset-server-usa" />;
}
