import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-server');
}

export default function PopularTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-server" />;
}
