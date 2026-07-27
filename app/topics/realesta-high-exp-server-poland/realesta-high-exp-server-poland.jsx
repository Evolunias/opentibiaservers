import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-poland');
}

export default function RealestaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-poland" />;
}
