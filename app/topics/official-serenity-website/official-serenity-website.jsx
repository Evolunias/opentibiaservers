import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-website');
}

export default function OfficialSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-website" />;
}
