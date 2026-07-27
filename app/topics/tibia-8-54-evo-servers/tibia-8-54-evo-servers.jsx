import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-servers');
}

export default function Tibia854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-servers" />;
}
