import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion');
}

export default function HighrateBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion" />;
}
