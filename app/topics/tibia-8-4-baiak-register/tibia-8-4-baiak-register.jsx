import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-baiak-register');
}

export default function Tibia84BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-baiak-register" />;
}
