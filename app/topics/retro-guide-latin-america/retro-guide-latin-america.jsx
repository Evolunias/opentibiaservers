import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-latin-america');
}

export default function RetroGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-latin-america" />;
}
