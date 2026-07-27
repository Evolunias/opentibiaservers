import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-canada');
}

export default function TibianusPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-canada" />;
}
