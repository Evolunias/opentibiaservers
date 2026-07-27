import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-ot');
}

export default function ActiveEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-ot" />;
}
