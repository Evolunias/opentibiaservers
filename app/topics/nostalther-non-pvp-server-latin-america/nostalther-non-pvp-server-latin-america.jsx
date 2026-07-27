import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-latin-america');
}

export default function NostaltherNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-latin-america" />;
}
