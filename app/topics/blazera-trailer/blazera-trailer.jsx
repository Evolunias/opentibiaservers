import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-trailer');
}

export default function BlazeraTrailerKeywordPage() {
  return <StaticKeywordPage slug="blazera-trailer" />;
}
