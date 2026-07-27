import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-poland');
}

export default function InfernalOtLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-poland" />;
}
