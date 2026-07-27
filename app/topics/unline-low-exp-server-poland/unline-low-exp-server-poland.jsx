import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-poland');
}

export default function UnlineLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-poland" />;
}
