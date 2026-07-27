import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-north-america');
}

export default function MistOfDeathSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-north-america" />;
}
