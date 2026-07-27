import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-register');
}

export default function Tibia13HighExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-register" />;
}
