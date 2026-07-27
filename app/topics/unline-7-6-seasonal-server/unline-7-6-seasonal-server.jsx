import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-6-seasonal-server');
}

export default function Unline76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-6-seasonal-server" />;
}
