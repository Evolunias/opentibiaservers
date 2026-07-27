import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity');
}

export default function BestSerenityKeywordPage() {
  return <StaticKeywordPage slug="best-serenity" />;
}
