import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('ravox-monk-ot');
}

export default function RavoxMonkOtPage() {
  return <StaticExactMatchPage slug="ravox-monk-ot" />;
}
