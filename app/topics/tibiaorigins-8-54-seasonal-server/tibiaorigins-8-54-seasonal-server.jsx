import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-54-seasonal-server');
}

export default function Tibiaorigins854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-54-seasonal-server" />;
}
