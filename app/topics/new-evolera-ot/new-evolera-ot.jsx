import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-ot');
}

export default function NewEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-ot" />;
}
