import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-launch-france');
}

export default function EvoLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-launch-france" />;
}
