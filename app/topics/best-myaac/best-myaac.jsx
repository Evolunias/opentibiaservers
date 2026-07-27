import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-myaac');
}

export default function BestMyaacKeywordPage() {
  return <StaticKeywordPage slug="best-myaac" />;
}
