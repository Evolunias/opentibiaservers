import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-official');
}

export default function NewSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-official" />;
}
