import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-low-exp-register');
}

export default function Tibia100LowExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-low-exp-register" />;
}
