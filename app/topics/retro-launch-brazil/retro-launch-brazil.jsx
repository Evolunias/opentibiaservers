import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-brazil');
}

export default function RetroLaunchBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-brazil" />;
}
