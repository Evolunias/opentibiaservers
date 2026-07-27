import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-seasonal-server');
}

export default function Evolunia96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-seasonal-server" />;
}
