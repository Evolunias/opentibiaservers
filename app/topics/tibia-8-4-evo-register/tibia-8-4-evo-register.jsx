import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-evo-register');
}

export default function Tibia84EvoRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-evo-register" />;
}
