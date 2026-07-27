import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-register');
}

export default function NewBaiakIlusionRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-register" />;
}
