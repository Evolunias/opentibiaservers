import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-seasonal-server');
}

export default function Tibianus100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-seasonal-server" />;
}
