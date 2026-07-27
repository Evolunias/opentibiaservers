import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-usa');
}

export default function RetroLaunchUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-usa" />;
}
