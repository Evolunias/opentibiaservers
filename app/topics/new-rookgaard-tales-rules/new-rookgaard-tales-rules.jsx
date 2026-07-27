import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-rules');
}

export default function NewRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-rules" />;
}
