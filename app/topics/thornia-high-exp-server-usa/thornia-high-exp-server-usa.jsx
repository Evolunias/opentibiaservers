import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-usa');
}

export default function ThorniaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-usa" />;
}
