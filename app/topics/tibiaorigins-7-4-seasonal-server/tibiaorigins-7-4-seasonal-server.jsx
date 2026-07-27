import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-4-seasonal-server');
}

export default function Tibiaorigins74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-4-seasonal-server" />;
}
