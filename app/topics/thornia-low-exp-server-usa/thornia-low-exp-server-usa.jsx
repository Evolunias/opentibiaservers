import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-usa');
}

export default function ThorniaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-usa" />;
}
