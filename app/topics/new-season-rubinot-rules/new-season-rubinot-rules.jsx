import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-rules');
}

export default function NewSeasonRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-rules" />;
}
