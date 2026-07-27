import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-register');
}

export default function TibiaHighExpServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-register" />;
}
