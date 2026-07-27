import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-6-seasonal-server');
}

export default function Unline86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-6-seasonal-server" />;
}
