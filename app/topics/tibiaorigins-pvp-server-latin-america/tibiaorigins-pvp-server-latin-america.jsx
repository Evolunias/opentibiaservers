import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-pvp-server-latin-america');
}

export default function TibiaoriginsPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-pvp-server-latin-america" />;
}
