import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('danubia');
}

export default function DanubiaPage() {
  return <StaticExactMatchPage slug="danubia" />;
}
