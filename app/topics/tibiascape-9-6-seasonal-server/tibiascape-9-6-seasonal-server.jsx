import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-seasonal-server');
}

export default function Tibiascape96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-seasonal-server" />;
}
