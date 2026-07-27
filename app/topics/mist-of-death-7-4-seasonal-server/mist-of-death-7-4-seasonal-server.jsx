import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-4-seasonal-server');
}

export default function MistOfDeath74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-4-seasonal-server" />;
}
