import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-seasonal-server');
}

export default function Shadowcores74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-seasonal-server" />;
}
