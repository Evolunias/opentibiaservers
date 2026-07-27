import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-register');
}

export default function TibiaPrivateServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-register" />;
}
