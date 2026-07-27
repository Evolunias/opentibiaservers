import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-latin-america');
}

export default function RetroOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-latin-america" />;
}
