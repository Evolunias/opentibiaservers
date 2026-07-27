import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-france');
}

export default function SeasonalLaunchFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-france" />;
}
