import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('blazera');
}

export default function BlazeraPage() {
  return <StaticExactMatchPage slug="blazera" />;
}
