import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-private-server');
}

export default function PopularCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-private-server" />;
}
