import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-register');
}

export default function Tibia81EvoRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-register" />;
}
