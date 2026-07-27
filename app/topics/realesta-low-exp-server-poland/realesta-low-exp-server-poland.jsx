import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-poland');
}

export default function RealestaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-poland" />;
}
