import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-poland');
}

export default function RetroLaunchPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-poland" />;
}
