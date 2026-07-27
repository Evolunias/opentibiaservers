import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-website');
}

export default function BestSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-website" />;
}
