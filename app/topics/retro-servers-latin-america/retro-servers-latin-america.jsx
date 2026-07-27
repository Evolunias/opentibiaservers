import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-latin-america');
}

export default function RetroServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-latin-america" />;
}
