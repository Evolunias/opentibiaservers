import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-ots');
}

export default function BestSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-ots" />;
}
