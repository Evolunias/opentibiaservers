import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-ot');
}

export default function PopularEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-ot" />;
}
