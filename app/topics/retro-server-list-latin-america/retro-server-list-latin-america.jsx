import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-latin-america');
}

export default function RetroServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-latin-america" />;
}
