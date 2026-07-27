import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-servers');
}

export default function Tibia15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-servers" />;
}
