import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-evo-register');
}

export default function Tibia854EvoRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-evo-register" />;
}
