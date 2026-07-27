import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-ot-server');
}

export default function PopularTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-ot-server" />;
}
