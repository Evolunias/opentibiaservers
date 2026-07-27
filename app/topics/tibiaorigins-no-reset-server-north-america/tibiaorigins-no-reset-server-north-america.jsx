import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-no-reset-server-north-america');
}

export default function TibiaoriginsNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-no-reset-server-north-america" />;
}
