import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-trailer');
}

export default function OxygenotTrailerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-trailer" />;
}
