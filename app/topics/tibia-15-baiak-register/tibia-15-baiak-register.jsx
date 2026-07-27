import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-register');
}

export default function Tibia15BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-register" />;
}
