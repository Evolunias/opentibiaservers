import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('draconiaot');
}

export default function DraconiaotPage() {
  return <StaticExactMatchPage slug="draconiaot" />;
}
