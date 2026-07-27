import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-login');
}

export default function CurrentSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-login" />;
}
