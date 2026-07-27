import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-high-exp-server-poland');
}

export default function LumineraHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-high-exp-server-poland" />;
}
