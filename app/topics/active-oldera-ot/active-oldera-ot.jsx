import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-ot');
}

export default function ActiveOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-ot" />;
}
