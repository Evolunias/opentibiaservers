import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-trailer');
}

export default function ThorniaTrailerKeywordPage() {
  return <StaticKeywordPage slug="thornia-trailer" />;
}
