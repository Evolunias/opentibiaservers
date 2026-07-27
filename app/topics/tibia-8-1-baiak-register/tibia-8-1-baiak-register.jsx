import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-baiak-register');
}

export default function Tibia81BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-baiak-register" />;
}
