import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-rules');
}

export default function FreshStartRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-rules" />;
}
