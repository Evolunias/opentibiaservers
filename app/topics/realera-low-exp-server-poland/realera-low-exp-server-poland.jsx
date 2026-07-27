import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-poland');
}

export default function RealeraLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-poland" />;
}
