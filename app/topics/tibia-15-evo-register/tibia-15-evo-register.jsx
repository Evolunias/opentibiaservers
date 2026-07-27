import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-evo-register');
}

export default function Tibia15EvoRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-evo-register" />;
}
