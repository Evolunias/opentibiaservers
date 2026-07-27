import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-register');
}

export default function TibiaCustomServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-register" />;
}
