import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp');
}

export default function TibianusPvpKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp" />;
}
