import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-seasonal-server');
}

export default function MistOfDeath15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-seasonal-server" />;
}
