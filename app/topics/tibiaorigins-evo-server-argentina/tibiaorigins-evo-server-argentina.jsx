import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-argentina');
}

export default function TibiaoriginsEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-argentina" />;
}
