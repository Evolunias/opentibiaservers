import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-usa');
}

export default function MistOfDeathSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-usa" />;
}
