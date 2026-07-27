import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-login');
}

export default function TopSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-login" />;
}
