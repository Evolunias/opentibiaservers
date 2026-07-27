import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-seasonal-server');
}

export default function Tibiaorigins15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-seasonal-server" />;
}
