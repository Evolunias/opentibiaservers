import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-rules');
}

export default function ActiveRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-rules" />;
}
