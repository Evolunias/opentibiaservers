import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-poland');
}

export default function LowExpOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-poland" />;
}
