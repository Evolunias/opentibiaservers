import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-seasonal-server');
}

export default function Unline15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-seasonal-server" />;
}
