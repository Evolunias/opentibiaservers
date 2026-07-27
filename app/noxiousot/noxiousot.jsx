import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('noxiousot');
}

export default function NoxiousotPage() {
  return <StaticExactMatchPage slug="noxiousot" />;
}
