import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-no-reset-server-argentina');
}

export default function TibiaoriginsNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-no-reset-server-argentina" />;
}
