import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-register');
}

export default function Tibia854BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-register" />;
}
