import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-72-seasonal-server');
}

export default function Tibiaorigins772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-72-seasonal-server" />;
}
