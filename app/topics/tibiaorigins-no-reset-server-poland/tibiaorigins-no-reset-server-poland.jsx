import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-no-reset-server-poland');
}

export default function TibiaoriginsNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-no-reset-server-poland" />;
}
