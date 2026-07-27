import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-ot-server');
}

export default function PopularEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-ot-server" />;
}
