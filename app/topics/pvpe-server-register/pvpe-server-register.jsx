import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-register');
}

export default function PvpeServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-register" />;
}
