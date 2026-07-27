import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-ot-server');
}

export default function PopularTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-ot-server" />;
}
