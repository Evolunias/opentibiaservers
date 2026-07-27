import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-register');
}

export default function Tibia74ServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-register" />;
}
