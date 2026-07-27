import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-high-exp-register');
}

export default function Tibia100HighExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-high-exp-register" />;
}
