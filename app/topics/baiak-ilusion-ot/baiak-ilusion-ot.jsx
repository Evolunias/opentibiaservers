import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-ot');
}

export default function BaiakIlusionOtKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-ot" />;
}
