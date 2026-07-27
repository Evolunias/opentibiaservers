import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-ot-server');
}

export default function LowrateBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-ot-server" />;
}
