import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-official');
}

export default function OfficialSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-official" />;
}
