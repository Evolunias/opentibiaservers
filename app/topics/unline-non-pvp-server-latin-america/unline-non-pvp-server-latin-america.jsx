import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-latin-america');
}

export default function UnlineNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-latin-america" />;
}
