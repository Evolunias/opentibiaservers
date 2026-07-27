import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-france');
}

export default function RetroLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-france" />;
}
