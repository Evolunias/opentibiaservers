import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-register');
}

export default function Tibia100BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-register" />;
}
