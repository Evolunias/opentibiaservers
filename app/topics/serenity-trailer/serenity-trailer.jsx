import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-trailer');
}

export default function SerenityTrailerKeywordPage() {
  return <StaticKeywordPage slug="serenity-trailer" />;
}
