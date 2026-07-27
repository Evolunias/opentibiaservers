import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots');
}

export default function NewYurotsKeywordPage() {
  return <StaticKeywordPage slug="new-yurots" />;
}
