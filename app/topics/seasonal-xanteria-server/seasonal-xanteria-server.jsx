import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-xanteria-server');
}

export default function SeasonalXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-xanteria-server" />;
}
