import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-login');
}

export default function BestSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-login" />;
}
