import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-register');
}

export default function Tibia15HighExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-register" />;
}
