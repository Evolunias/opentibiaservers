import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-north-america');
}

export default function RetroGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-north-america" />;
}
