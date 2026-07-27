import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-latin-america');
}

export default function TibianusPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-latin-america" />;
}
