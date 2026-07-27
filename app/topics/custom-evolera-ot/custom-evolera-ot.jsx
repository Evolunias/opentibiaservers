import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-ot');
}

export default function CustomEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-ot" />;
}
