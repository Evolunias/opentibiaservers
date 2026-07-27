import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-trailer');
}

export default function MadnessaliveTrailerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-trailer" />;
}
