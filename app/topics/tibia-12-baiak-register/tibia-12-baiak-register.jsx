import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-register');
}

export default function Tibia12BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-register" />;
}
