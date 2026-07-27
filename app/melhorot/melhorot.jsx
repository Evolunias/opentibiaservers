import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('melhorot');
}

export default function MelhorotPage() {
  return <StaticExactMatchPage slug="melhorot" />;
}
