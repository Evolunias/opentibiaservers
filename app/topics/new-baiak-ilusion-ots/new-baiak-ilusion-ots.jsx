import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-ots');
}

export default function NewBaiakIlusionOtsKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-ots" />;
}
