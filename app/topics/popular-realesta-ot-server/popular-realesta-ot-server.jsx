import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-ot-server');
}

export default function PopularRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-ot-server" />;
}
