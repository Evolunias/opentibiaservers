import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-official');
}

export default function CurrentSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-official" />;
}
