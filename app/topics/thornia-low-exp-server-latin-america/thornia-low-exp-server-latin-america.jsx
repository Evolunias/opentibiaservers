import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-latin-america');
}

export default function ThorniaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-latin-america" />;
}
