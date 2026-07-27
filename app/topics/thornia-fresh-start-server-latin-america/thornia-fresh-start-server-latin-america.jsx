import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-latin-america');
}

export default function ThorniaFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-latin-america" />;
}
