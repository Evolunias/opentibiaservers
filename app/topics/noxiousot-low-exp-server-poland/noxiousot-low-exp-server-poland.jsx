import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-low-exp-server-poland');
}

export default function NoxiousotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-low-exp-server-poland" />;
}
