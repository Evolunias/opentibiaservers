import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-france');
}

export default function TibiaoriginsEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-france" />;
}
