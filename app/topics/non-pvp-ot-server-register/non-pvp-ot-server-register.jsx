import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-register');
}

export default function NonPvpOtServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-register" />;
}
