import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-mexico');
}

export default function MistOfDeathSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-mexico" />;
}
