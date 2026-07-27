import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-mist-of-death-server');
}

export default function SeasonalMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-mist-of-death-server" />;
}
