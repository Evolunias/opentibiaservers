import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-register');
}

export default function ActiveBaiakIlusionRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-register" />;
}
