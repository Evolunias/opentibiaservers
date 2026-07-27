import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-argentina');
}

export default function TibianusPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-argentina" />;
}
