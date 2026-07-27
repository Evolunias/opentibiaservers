import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-register');
}

export default function CurrentBaiakIlusionRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-register" />;
}
