import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-98-seasonal-server');
}

export default function MistOfDeath1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-98-seasonal-server" />;
}
