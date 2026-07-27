import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-register');
}

export default function EvoServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="evo-server-register" />;
}
