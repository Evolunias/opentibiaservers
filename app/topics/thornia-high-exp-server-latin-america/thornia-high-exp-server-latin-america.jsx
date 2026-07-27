import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-latin-america');
}

export default function ThorniaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-latin-america" />;
}
