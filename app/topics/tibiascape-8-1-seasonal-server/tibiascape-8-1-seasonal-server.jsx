import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-seasonal-server');
}

export default function Tibiascape81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-seasonal-server" />;
}
