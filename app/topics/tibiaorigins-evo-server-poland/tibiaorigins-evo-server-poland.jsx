import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-poland');
}

export default function TibiaoriginsEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-poland" />;
}
