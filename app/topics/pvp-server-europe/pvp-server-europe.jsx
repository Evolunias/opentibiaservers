import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-europe');
}

export default function PvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-europe" />;
}
