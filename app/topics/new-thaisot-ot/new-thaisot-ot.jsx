import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-ot');
}

export default function NewThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-ot" />;
}
