import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-poland');
}

export default function ThorniaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-poland" />;
}
