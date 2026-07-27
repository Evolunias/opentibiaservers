import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-uk');
}

export default function ThorniaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-uk" />;
}
