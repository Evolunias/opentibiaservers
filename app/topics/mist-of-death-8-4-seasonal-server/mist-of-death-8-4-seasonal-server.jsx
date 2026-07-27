import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-4-seasonal-server');
}

export default function MistOfDeath84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-4-seasonal-server" />;
}
