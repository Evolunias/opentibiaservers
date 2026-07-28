import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('gesior');
}

export default function GesiorPage() {
  return <StaticExactMatchPage slug="gesior" />;
}
