import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-register');
}

export default function Tibia11LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-register" />;
}
