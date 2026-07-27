import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-official');
}

export default function PopularSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-official" />;
}
