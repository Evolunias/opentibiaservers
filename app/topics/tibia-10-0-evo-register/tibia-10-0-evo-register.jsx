import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-register');
}

export default function Tibia100EvoRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-register" />;
}
