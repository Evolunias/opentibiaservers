import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-argentina');
}

export default function PvpOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-argentina" />;
}
