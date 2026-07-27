import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-south-america');
}

export default function TibiaoriginsEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-south-america" />;
}
