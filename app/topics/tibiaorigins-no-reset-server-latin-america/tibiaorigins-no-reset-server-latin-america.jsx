import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-no-reset-server-latin-america');
}

export default function TibiaoriginsNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-no-reset-server-latin-america" />;
}
