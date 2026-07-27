import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-rules');
}

export default function CustomRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-rules" />;
}
