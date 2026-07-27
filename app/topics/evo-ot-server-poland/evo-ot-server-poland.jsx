import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ot-server-poland');
}

export default function EvoOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-ot-server-poland" />;
}
