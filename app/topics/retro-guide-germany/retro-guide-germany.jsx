import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-germany');
}

export default function RetroGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-germany" />;
}
