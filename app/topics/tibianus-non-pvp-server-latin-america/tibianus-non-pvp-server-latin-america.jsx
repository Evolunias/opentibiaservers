import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-latin-america');
}

export default function TibianusNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-latin-america" />;
}
