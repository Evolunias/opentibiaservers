import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-website');
}

export default function NewSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-website" />;
}
