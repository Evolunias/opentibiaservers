import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('relicariaot');
}

export default function RelicariaotPage() {
  return <StaticExactMatchPage slug="relicariaot" />;
}
