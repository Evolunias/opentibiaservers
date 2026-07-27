import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-latin-america');
}

export default function RetroClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-client-latin-america" />;
}
