import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-trailer');
}

export default function TibiaraTrailerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-trailer" />;
}
