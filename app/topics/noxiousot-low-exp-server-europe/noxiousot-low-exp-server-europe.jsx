import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-low-exp-server-europe');
}

export default function NoxiousotLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-low-exp-server-europe" />;
}
