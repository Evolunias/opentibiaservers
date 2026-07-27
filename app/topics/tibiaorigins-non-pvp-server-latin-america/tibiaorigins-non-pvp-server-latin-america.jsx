import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-non-pvp-server-latin-america');
}

export default function TibiaoriginsNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-non-pvp-server-latin-america" />;
}
