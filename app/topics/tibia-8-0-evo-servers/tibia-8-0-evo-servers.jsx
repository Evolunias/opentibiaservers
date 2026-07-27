import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-evo-servers');
}

export default function Tibia80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-evo-servers" />;
}
