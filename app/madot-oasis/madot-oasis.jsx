import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('madot-oasis');
}

export default function MadotOasisPage() {
  return <StaticExactMatchPage slug="madot-oasis" />;
}
