import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-register');
}

export default function Tibia1098ServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-register" />;
}
