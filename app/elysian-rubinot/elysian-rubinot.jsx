import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('elysian-rubinot');
}

export default function ElysianRubinotPage() {
  return <StaticExactMatchPage slug="elysian-rubinot" />;
}
