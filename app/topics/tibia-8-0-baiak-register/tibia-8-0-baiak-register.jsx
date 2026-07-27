import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-register');
}

export default function Tibia80BaiakRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-register" />;
}
