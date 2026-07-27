import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-ot-server');
}

export default function PopularAureraGlobalOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-ot-server" />;
}
