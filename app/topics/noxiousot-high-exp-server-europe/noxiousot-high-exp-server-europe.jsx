import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp-server-europe');
}

export default function NoxiousotHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp-server-europe" />;
}
