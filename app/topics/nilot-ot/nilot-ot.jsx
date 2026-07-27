import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-ot');
}

export default function NilotOtKeywordPage() {
  return <StaticKeywordPage slug="nilot-ot" />;
}
