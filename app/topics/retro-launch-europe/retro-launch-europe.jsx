import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-europe');
}

export default function RetroLaunchEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-europe" />;
}
