import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-ots');
}

export default function HighrateBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-ots" />;
}
