import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-south-america');
}

export default function ThorniaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-south-america" />;
}
