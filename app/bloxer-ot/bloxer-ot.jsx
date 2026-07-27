import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('bloxer-ot');
}

export default function BloxerOtPage() {
  return <StaticExactMatchPage slug="bloxer-ot" />;
}
