import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-website');
}

export default function CurrentSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-website" />;
}
