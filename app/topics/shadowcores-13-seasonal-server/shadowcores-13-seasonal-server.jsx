import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-seasonal-server');
}

export default function Shadowcores13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-seasonal-server" />;
}
