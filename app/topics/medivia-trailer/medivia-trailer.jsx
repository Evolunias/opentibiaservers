import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-trailer');
}

export default function MediviaTrailerKeywordPage() {
  return <StaticKeywordPage slug="medivia-trailer" />;
}
