import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-register');
}

export default function TibiaOtServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-register" />;
}
