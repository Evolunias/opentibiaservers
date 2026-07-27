import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('dragon-realms-ot');
}

export default function DragonRealmsOtPage() {
  return <StaticExactMatchPage slug="dragon-realms-ot" />;
}
