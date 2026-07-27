import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-register');
}

export default function Tibia71LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-register" />;
}
