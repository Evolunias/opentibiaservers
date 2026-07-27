import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp-server-poland');
}

export default function NoxiousotHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp-server-poland" />;
}
