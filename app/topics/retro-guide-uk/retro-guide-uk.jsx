import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-uk');
}

export default function RetroGuideUkKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-uk" />;
}
