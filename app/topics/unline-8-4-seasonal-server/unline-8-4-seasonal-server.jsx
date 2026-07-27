import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-seasonal-server');
}

export default function Unline84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-seasonal-server" />;
}
