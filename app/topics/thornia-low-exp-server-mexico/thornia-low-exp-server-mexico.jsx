import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-mexico');
}

export default function ThorniaLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-mexico" />;
}
