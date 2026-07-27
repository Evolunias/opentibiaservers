import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-poland');
}

export default function RetroGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-poland" />;
}
