import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-register');
}

export default function Tibia96LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-register" />;
}
