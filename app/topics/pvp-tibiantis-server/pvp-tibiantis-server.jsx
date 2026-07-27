import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibiantis-server');
}

export default function PvpTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibiantis-server" />;
}
