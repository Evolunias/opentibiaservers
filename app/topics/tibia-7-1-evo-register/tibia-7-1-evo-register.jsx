import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-evo-register');
}

export default function Tibia71EvoRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-evo-register" />;
}
