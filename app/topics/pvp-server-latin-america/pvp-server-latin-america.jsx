import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-latin-america');
}

export default function PvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-latin-america" />;
}
