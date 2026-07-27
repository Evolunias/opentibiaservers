import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-ot');
}

export default function NewBaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-ot" />;
}
