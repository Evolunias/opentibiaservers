import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-register');
}

export default function Tibia1098BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-register" />;
}
