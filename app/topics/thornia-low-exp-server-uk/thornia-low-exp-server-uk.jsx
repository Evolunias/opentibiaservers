import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-uk');
}

export default function ThorniaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-uk" />;
}
