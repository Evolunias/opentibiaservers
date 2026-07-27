import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-luminera-server');
}

export default function SeasonalLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-luminera-server" />;
}
