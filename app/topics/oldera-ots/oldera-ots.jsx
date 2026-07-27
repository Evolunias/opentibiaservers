import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-ots');
}

export default function OlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="oldera-ots" />;
}
