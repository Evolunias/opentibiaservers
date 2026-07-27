import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fresh-start-server-uk');
}

export default function NoxiousotFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fresh-start-server-uk" />;
}
