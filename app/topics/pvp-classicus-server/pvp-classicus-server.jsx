import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-classicus-server');
}

export default function PvpClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-classicus-server" />;
}
