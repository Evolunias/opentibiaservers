import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-europe');
}

export default function TibiaoriginsEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-europe" />;
}
