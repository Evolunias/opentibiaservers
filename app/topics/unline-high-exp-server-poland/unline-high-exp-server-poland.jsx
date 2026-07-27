import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-poland');
}

export default function UnlineHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-poland" />;
}
