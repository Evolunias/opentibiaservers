import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-54-seasonal-server');
}

export default function Shadowcores854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-54-seasonal-server" />;
}
