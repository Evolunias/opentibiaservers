import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-evo-register');
}

export default function Tibia1098EvoRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-evo-register" />;
}
