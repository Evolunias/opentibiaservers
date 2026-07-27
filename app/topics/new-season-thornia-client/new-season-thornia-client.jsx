import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-client');
}

export default function NewSeasonThorniaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-client" />;
}
