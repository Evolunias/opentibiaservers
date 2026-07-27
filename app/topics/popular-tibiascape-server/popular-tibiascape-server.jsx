import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-server');
}

export default function PopularTibiascapeServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-server" />;
}
