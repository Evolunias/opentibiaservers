import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-argentina');
}

export default function NonPvpOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-argentina" />;
}
