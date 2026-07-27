import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-poland');
}

export default function MistOfDeathSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-poland" />;
}
