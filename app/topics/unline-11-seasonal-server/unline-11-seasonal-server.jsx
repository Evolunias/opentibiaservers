import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-seasonal-server');
}

export default function Unline11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-seasonal-server" />;
}
