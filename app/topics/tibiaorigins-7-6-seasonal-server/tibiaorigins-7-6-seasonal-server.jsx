import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-seasonal-server');
}

export default function Tibiaorigins76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-seasonal-server" />;
}
