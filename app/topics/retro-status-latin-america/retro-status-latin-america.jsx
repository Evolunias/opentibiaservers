import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-latin-america');
}

export default function RetroStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-status-latin-america" />;
}
