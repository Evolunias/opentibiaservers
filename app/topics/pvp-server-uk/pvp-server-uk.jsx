import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-uk');
}

export default function PvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-uk" />;
}
