import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-europe-servers');
}

export default function NoxiousotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-europe-servers" />;
}
