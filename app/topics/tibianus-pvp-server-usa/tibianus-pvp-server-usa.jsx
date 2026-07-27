import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-usa');
}

export default function TibianusPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-usa" />;
}
