import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-website');
}

export default function FreshStartSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-website" />;
}
