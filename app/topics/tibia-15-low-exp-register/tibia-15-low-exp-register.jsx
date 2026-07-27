import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-register');
}

export default function Tibia15LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-register" />;
}
