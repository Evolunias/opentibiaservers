import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion');
}

export default function NewBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion" />;
}
