import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-seasonal-server');
}

export default function Tibiascape100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-seasonal-server" />;
}
