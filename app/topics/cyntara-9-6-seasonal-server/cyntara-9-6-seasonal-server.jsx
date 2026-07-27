import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-9-6-seasonal-server');
}

export default function Cyntara96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-9-6-seasonal-server" />;
}
