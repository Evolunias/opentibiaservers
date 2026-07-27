import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-mexico');
}

export default function PvpOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-mexico" />;
}
