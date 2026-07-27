import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-list');
}

export default function NonPvpOtServerListKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-list" />;
}
