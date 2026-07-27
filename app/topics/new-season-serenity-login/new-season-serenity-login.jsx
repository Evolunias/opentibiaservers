import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-login');
}

export default function NewSeasonSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-login" />;
}
