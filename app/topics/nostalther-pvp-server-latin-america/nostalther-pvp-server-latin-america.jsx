import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-latin-america');
}

export default function NostaltherPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-latin-america" />;
}
