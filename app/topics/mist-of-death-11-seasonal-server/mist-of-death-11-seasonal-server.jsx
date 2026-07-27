import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-11-seasonal-server');
}

export default function MistOfDeath11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-11-seasonal-server" />;
}
