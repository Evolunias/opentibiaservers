import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-trailer');
}

export default function NilotTrailerKeywordPage() {
  return <StaticKeywordPage slug="nilot-trailer" />;
}
