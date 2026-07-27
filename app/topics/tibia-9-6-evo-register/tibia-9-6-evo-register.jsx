import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-evo-register');
}

export default function Tibia96EvoRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-evo-register" />;
}
