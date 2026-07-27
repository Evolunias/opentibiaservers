import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-latin-america');
}

export default function MiraclePvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-latin-america" />;
}
