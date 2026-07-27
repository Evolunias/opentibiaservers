import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-register');
}

export default function Tibia12HighExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-register" />;
}
