import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-germany');
}

export default function ThorniaLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-germany" />;
}
