import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-seasonal-server');
}

export default function Tibiascape74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-seasonal-server" />;
}
