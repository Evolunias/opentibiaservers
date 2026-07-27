import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-germany');
}

export default function EvoTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-germany" />;
}
