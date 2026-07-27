import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp-server-poland');
}

export default function InfernalOtHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp-server-poland" />;
}
