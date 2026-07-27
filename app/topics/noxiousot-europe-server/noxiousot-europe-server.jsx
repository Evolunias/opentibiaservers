import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-europe-server');
}

export default function NoxiousotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-europe-server" />;
}
