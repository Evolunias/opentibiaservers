import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-login');
}

export default function BaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-login" />;
}
