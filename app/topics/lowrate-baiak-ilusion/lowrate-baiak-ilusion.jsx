import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion');
}

export default function LowrateBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion" />;
}
