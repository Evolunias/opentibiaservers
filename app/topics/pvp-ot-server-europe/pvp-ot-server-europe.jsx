import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ot-server-europe');
}

export default function PvpOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-ot-server-europe" />;
}
