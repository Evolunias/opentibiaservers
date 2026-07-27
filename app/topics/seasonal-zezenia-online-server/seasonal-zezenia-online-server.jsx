import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-zezenia-online-server');
}

export default function SeasonalZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-zezenia-online-server" />;
}
