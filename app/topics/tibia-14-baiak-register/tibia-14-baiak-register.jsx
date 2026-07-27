import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-register');
}

export default function Tibia14BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-register" />;
}
