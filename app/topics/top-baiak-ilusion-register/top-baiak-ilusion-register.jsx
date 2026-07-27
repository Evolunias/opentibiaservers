import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-register');
}

export default function TopBaiakIlusionRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-register" />;
}
