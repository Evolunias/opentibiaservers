import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-12-seasonal-server');
}

export default function MistOfDeath12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-12-seasonal-server" />;
}
