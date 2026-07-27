import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('olympa');
}

export default function OlympaPage() {
  return <StaticExactMatchPage slug="olympa" />;
}
