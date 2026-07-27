import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-server');
}

export default function PopularSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-server" />;
}
