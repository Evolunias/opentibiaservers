import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-evo-servers');
}

export default function Tibia74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-evo-servers" />;
}
