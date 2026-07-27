import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-seasonal-server');
}

export default function Shadowcores11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-seasonal-server" />;
}
