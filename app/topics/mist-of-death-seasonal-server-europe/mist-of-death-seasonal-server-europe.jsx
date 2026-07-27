import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-europe');
}

export default function MistOfDeathSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-europe" />;
}
