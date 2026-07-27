import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-trailer');
}

export default function EvoluniaTrailerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-trailer" />;
}
