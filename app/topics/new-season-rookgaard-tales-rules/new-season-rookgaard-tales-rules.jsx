import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-rules');
}

export default function NewSeasonRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-rules" />;
}
