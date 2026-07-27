import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-register');
}

export default function Tibia13LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-register" />;
}
