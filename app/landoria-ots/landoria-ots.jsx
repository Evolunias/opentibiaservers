import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('landoria-ots');
}

export default function LandoriaOtsPage() {
  return <StaticExactMatchPage slug="landoria-ots" />;
}
