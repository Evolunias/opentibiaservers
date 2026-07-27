import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-mexico');
}

export default function SeasonalLaunchMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-mexico" />;
}
