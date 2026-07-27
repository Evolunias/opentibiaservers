import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-high-exp-register');
}

export default function Tibia1098HighExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-high-exp-register" />;
}
