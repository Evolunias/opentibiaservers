import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-poland');
}

export default function HighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-poland" />;
}
