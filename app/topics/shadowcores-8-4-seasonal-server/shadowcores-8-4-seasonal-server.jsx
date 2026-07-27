import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-seasonal-server');
}

export default function Shadowcores84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-seasonal-server" />;
}
