import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-login');
}

export default function NewSeasonNilotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-login" />;
}
