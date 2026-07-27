import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-ots');
}

export default function NewSeasonSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-ots" />;
}
