import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-seasonal-server');
}

export default function Shadowcores12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-seasonal-server" />;
}
