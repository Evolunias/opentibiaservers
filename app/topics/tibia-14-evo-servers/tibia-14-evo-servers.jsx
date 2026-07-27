import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-evo-servers');
}

export default function Tibia14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-evo-servers" />;
}
