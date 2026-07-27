import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-seasonal-server');
}

export default function Unline96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-seasonal-server" />;
}
