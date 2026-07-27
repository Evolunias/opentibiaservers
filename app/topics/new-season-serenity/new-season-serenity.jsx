import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity');
}

export default function NewSeasonSerenityKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity" />;
}
