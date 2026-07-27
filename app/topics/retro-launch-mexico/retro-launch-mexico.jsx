import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-mexico');
}

export default function RetroLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-mexico" />;
}
