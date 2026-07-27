import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-poland');
}

export default function HighExpOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-poland" />;
}
