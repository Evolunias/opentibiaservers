import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-north-america');
}

export default function RetroLaunchNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-north-america" />;
}
