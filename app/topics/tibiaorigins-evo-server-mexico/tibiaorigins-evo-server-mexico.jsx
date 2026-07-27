import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-mexico');
}

export default function TibiaoriginsEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-mexico" />;
}
