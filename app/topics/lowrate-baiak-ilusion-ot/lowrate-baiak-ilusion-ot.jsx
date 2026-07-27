import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-ot');
}

export default function LowrateBaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-ot" />;
}
