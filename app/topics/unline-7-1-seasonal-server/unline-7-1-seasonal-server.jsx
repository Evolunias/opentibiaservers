import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-seasonal-server');
}

export default function Unline71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-seasonal-server" />;
}
