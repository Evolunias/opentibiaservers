import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('oblema-7-4-server');
}

export default function Oblema74ServerPage() {
  return <StaticExactMatchPage slug="oblema-7-4-server" />;
}
