import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('lunarian-rubinot');
}

export default function LunarianRubinotPage() {
  return <StaticExactMatchPage slug="lunarian-rubinot" />;
}
