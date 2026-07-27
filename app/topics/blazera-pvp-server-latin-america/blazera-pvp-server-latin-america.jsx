import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-pvp-server-latin-america');
}

export default function BlazeraPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-pvp-server-latin-america" />;
}
