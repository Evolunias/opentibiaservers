import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-reset');
}

export default function BaiakIlusionResetKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-reset" />;
}
