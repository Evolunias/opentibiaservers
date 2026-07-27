import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-seasonal-server');
}

export default function Tibiaorigins81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-seasonal-server" />;
}
