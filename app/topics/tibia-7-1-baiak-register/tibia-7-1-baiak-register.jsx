import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-baiak-register');
}

export default function Tibia71BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-baiak-register" />;
}
