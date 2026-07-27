import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-latin-america');
}

export default function TibiaoriginsEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-latin-america" />;
}
