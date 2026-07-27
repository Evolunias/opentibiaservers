import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-high-exp-server-poland');
}

export default function OxygenotHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-high-exp-server-poland" />;
}
