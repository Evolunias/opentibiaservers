import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-1-seasonal-server');
}

export default function Tibiascape71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-1-seasonal-server" />;
}
