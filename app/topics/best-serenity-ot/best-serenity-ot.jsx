import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-ot');
}

export default function BestSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-ot" />;
}
