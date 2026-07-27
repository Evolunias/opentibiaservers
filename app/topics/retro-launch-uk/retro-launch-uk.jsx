import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-uk');
}

export default function RetroLaunchUkKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-uk" />;
}
