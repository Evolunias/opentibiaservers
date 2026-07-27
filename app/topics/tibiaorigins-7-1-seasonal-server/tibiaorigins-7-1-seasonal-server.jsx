import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-seasonal-server');
}

export default function Tibiaorigins71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-seasonal-server" />;
}
