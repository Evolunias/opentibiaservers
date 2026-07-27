import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-europe');
}

export default function PvpClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-europe" />;
}
