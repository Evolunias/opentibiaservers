import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-ot');
}

export default function BestClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-ot" />;
}
