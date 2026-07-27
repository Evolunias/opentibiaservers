import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-client');
}

export default function BestSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-client" />;
}
