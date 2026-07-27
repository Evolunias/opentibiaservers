import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('lordebra-paulistinha');
}

export default function LordebraPaulistinhaPage() {
  return <StaticExactMatchPage slug="lordebra-paulistinha" />;
}
