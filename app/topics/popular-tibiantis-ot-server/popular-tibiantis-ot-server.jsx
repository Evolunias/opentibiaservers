import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-ot-server');
}

export default function PopularTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-ot-server" />;
}
