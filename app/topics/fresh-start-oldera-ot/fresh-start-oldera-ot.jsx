import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-ot');
}

export default function FreshStartOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-ot" />;
}
