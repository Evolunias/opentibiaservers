import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-high-exp-register');
}

export default function Tibia76HighExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-high-exp-register" />;
}
