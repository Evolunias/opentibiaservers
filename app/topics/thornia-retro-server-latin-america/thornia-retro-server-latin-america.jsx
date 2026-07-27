import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-latin-america');
}

export default function ThorniaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-latin-america" />;
}
