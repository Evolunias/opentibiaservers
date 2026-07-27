import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-evo-server-sweden');
}

export default function TibiaoriginsEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-evo-server-sweden" />;
}
