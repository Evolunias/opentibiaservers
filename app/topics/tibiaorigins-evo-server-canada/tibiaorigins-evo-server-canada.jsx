import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-canada');
}

export default function TibiaoriginsEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-canada" />;
}
