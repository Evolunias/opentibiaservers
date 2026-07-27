import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-germany');
}

export default function RetroLaunchGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-germany" />;
}
