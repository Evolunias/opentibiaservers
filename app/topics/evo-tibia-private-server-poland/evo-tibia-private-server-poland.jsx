import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-poland');
}

export default function EvoTibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-poland" />;
}
