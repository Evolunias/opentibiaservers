import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-no-reset-server-brazil');
}

export default function TibiaoriginsNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-no-reset-server-brazil" />;
}
