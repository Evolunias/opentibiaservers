import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-trailer');
}

export default function ImperianicTrailerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-trailer" />;
}
