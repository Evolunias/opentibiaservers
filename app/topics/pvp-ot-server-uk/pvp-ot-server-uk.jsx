import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-uk');
}

export default function PvpOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-uk" />;
}
