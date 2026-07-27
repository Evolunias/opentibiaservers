import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-north-america');
}

export default function TibiaoriginsEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-north-america" />;
}
