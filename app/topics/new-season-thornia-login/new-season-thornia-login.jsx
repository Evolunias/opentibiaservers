import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-login');
}

export default function NewSeasonThorniaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-login" />;
}
