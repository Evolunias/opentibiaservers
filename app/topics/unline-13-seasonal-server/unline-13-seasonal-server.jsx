import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-seasonal-server');
}

export default function Unline13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-seasonal-server" />;
}
