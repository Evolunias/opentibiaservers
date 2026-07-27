import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-poland');
}

export default function LowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-poland" />;
}
