import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-register');
}

export default function Tibia772BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-register" />;
}
