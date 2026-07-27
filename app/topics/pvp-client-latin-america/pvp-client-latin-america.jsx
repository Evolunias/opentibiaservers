import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-latin-america');
}

export default function PvpClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-latin-america" />;
}
