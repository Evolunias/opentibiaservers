import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-seasonal-server');
}

export default function Evolunia71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-seasonal-server" />;
}
