import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('askara');
}

export default function AskaraPage() {
  return <StaticExactMatchPage slug="askara" />;
}
