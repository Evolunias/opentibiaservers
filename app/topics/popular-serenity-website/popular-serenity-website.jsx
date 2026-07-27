import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-website');
}

export default function PopularSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-website" />;
}
