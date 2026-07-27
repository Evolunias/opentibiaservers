import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-website');
}

export default function SerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="serenity-website" />;
}
