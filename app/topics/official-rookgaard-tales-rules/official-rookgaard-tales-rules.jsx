import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-rules');
}

export default function OfficialRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-rules" />;
}
