import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-usa');
}

export default function PvpOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-usa" />;
}
