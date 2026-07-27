import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-register');
}

export default function Tibia14LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-register" />;
}
