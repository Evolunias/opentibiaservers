import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-low-exp-register');
}

export default function Tibia854LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-low-exp-register" />;
}
