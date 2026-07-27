import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-register');
}

export default function CustomBaiakIlusionRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-register" />;
}
