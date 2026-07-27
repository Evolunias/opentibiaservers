import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-argentina');
}

export default function RetroLaunchArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-argentina" />;
}
