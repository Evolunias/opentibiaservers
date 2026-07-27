import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-mexico');
}

export default function PvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-mexico" />;
}
