import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-uk');
}

export default function EvoTibiaPrivateServerUkKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-uk" />;
}
