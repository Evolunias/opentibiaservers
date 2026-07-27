import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-high-exp-register');
}

export default function Tibia80HighExpRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-high-exp-register" />;
}
