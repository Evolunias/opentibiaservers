import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-login');
}

export default function PopularSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-login" />;
}
