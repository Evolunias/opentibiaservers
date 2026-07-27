import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-europe');
}

export default function RetroGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-europe" />;
}
