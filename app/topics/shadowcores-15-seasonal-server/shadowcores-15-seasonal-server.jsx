import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-seasonal-server');
}

export default function Shadowcores15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-seasonal-server" />;
}
