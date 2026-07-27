import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-latin-america');
}

export default function MistOfDeathSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-latin-america" />;
}
