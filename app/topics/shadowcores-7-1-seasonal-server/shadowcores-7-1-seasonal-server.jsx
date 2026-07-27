import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-seasonal-server');
}

export default function Shadowcores71SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-seasonal-server" />;
}
