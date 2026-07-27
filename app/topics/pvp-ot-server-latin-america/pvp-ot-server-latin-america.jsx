import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-latin-america');
}

export default function PvpOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-latin-america" />;
}
