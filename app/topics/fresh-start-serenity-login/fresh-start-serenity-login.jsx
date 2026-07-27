import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-login');
}

export default function FreshStartSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-login" />;
}
