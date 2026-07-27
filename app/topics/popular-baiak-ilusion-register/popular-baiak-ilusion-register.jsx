import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-register');
}

export default function PopularBaiakIlusionRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-register" />;
}
