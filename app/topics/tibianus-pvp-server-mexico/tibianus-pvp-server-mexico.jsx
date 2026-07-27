import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-mexico');
}

export default function TibianusPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-mexico" />;
}
