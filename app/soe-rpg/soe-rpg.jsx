import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('soe-rpg');
}

export default function SoeRpgPage() {
  return <StaticExactMatchPage slug="soe-rpg" />;
}
