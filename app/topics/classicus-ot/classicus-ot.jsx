import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-ot');
}

export default function ClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="classicus-ot" />;
}
