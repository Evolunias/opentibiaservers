import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-launch-latin-america');
}

export default function SeasonalLaunchLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-launch-latin-america" />;
}
