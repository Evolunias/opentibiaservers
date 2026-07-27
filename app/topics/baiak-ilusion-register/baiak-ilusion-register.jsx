import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-register');
}

export default function BaiakIlusionRegisterKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-register" />;
}
