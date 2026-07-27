import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-ot');
}

export default function TopEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-ot" />;
}
