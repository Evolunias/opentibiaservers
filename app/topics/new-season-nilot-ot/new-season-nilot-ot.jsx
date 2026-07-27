import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-ot');
}

export default function NewSeasonNilotOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-ot" />;
}
