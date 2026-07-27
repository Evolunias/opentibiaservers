import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-germany');
}

export default function TibiaoriginsEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-germany" />;
}
