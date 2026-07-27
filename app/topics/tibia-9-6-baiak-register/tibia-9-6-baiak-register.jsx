import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-register');
}

export default function Tibia96BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-register" />;
}
