import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-usa');
}

export default function RetroGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-usa" />;
}
