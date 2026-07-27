import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-0-seasonal-server');
}

export default function Shadowcores80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-0-seasonal-server" />;
}
