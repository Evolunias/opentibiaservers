import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-official');
}

export default function CustomSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-official" />;
}
