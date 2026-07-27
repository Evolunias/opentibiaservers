import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-official');
}

export default function SerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="serenity-official" />;
}
