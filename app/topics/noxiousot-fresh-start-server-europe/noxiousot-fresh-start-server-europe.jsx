import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-europe');
}

export default function NoxiousotFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-europe" />;
}
