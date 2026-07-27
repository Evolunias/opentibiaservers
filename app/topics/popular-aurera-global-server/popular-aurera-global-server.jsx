import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-server');
}

export default function PopularAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-server" />;
}
