import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-trailer');
}

export default function RuthlessChaosTrailerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-trailer" />;
}
