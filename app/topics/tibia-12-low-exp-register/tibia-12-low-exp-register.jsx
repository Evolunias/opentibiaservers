import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-register');
}

export default function Tibia12LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-register" />;
}
