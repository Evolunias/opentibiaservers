import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-classicus-server');
}

export default function NonPvpClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-classicus-server" />;
}
