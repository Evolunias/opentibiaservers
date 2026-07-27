import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-6-seasonal-server');
}

export default function MistOfDeath86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-6-seasonal-server" />;
}
