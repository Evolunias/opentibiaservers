import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-mexico');
}

export default function ThorniaHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-mexico" />;
}
