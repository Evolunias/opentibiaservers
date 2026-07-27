import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-private-server');
}

export default function PopularMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-private-server" />;
}
