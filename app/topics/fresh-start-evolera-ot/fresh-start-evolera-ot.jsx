import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-ot');
}

export default function FreshStartEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-ot" />;
}
