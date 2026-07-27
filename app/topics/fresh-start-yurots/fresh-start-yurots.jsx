import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-yurots');
}

export default function FreshStartYurotsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-yurots" />;
}
