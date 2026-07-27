import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('medivia-online');
}

export default function MediviaOnlinePage() {
  return <StaticExactMatchPage slug="medivia-online" />;
}
