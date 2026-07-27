import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-no-reset-server-europe');
}

export default function TibiaoriginsNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-no-reset-server-europe" />;
}
