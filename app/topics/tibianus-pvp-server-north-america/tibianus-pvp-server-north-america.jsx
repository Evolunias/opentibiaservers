import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-north-america');
}

export default function TibianusPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-north-america" />;
}
