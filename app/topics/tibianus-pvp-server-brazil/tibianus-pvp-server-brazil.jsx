import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-brazil');
}

export default function TibianusPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-brazil" />;
}
