import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-trailer');
}

export default function NostaltherTrailerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-trailer" />;
}
