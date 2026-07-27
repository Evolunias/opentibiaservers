import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-private-server');
}

export default function PopularSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-private-server" />;
}
