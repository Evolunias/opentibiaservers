import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-0-seasonal-server');
}

export default function Tibiascape80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-0-seasonal-server" />;
}
