import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-ot');
}

export default function OlderaOtKeywordPage() {
  return <StaticKeywordPage slug="oldera-ot" />;
}
