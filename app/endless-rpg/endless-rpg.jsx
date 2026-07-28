import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('endless-rpg');
}

export default function EndlessRpgPage() {
  return <StaticExactMatchPage slug="endless-rpg" />;
}
