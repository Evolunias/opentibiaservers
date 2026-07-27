import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-seasonal-server');
}

export default function Unline74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-seasonal-server" />;
}
