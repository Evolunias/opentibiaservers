import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-login');
}

export default function NewSeasonCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-login" />;
}
