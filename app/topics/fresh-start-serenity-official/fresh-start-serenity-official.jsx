import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-official');
}

export default function FreshStartSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-official" />;
}
