import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-rookgaard-tales-server');
}

export default function SeasonalRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-rookgaard-tales-server" />;
}
