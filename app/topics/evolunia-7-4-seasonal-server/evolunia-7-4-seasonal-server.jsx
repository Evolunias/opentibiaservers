import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-seasonal-server');
}

export default function Evolunia74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-seasonal-server" />;
}
