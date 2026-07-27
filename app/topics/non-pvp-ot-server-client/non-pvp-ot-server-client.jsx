import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-client');
}

export default function NonPvpOtServerClientKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-client" />;
}
