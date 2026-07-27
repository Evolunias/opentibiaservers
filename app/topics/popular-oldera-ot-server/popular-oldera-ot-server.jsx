import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-ot-server');
}

export default function PopularOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-ot-server" />;
}
