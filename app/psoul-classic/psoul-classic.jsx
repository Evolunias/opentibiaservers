import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('psoul-classic');
}

export default function PsoulClassicPage() {
  return <StaticExactMatchPage slug="psoul-classic" />;
}
