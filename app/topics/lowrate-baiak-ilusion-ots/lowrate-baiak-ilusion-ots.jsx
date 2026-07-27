import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-ots');
}

export default function LowrateBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-ots" />;
}
