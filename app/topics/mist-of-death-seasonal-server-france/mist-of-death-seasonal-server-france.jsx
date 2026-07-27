import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-france');
}

export default function MistOfDeathSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-france" />;
}
