import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-seasonal-server');
}

export default function Tibiascape15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-seasonal-server" />;
}
