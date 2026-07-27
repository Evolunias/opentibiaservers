import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-official');
}

export default function ActiveSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-official" />;
}
