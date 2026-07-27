import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-ot-server');
}

export default function PopularXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-ot-server" />;
}
