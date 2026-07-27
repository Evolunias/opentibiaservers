import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-ot-server');
}

export default function PopularUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-ot-server" />;
}
