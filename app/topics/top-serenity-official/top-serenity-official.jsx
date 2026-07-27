import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-official');
}

export default function TopSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-official" />;
}
