import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-register');
}

export default function Tibia11BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-register" />;
}
