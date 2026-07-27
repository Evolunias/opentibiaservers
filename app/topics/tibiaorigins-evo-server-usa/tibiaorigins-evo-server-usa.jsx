import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-usa');
}

export default function TibiaoriginsEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-usa" />;
}
