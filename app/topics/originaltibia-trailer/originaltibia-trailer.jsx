import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-trailer');
}

export default function OriginaltibiaTrailerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-trailer" />;
}
