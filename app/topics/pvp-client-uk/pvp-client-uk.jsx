import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-uk');
}

export default function PvpClientUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-uk" />;
}
