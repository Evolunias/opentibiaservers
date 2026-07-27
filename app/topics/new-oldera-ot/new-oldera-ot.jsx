import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-ot');
}

export default function NewOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-ot" />;
}
