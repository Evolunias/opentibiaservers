import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-trailer');
}

export default function SabrehavenTrailerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-trailer" />;
}
