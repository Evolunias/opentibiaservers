import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-ot');
}

export default function NewYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-ot" />;
}
