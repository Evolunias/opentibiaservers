import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-germany');
}

export default function ThorniaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-germany" />;
}
