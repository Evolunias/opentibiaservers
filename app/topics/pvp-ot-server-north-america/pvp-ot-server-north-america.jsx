import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-north-america');
}

export default function PvpOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-north-america" />;
}
