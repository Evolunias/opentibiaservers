import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-register');
}

export default function OfficialBaiakIlusionRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-register" />;
}
