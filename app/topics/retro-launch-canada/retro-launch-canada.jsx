import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-canada');
}

export default function RetroLaunchCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-canada" />;
}
