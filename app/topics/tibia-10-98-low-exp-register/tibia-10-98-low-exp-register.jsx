import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-low-exp-register');
}

export default function Tibia1098LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-low-exp-register" />;
}
