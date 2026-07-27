import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-client');
}

export default function NewSeasonSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-client" />;
}
