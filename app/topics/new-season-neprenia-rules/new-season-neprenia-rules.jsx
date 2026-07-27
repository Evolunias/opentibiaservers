import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-rules');
}

export default function NewSeasonNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-rules" />;
}
