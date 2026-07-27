import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-trailer');
}

export default function MistOfDeathTrailerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-trailer" />;
}
