import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-ots');
}

export default function NewSeasonNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-ots" />;
}
