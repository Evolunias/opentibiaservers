import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-latin-america');
}

export default function RetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-latin-america" />;
}
