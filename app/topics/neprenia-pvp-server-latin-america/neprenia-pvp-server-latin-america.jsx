import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-latin-america');
}

export default function NepreniaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-latin-america" />;
}
