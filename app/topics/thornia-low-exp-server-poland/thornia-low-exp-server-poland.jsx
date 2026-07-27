import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-poland');
}

export default function ThorniaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-poland" />;
}
