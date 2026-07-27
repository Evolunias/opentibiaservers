import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-ot-server');
}

export default function HighrateBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-ot-server" />;
}
