import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-seasonal-server');
}

export default function Unline14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-seasonal-server" />;
}
