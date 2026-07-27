import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-germany');
}

export default function MistOfDeathSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-germany" />;
}
