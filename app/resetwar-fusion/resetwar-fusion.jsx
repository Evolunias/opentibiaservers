import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('resetwar-fusion');
}

export default function ResetwarFusionPage() {
  return <StaticExactMatchPage slug="resetwar-fusion" />;
}
