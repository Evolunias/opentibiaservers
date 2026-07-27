import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-ot');
}

export default function NewSeasonSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-ot" />;
}
