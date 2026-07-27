import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-europe');
}

export default function EvoTibiaPrivateServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-europe" />;
}
