import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-latin-america');
}

export default function RetroLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-latin-america" />;
}
