import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-reset');
}

export default function OlderaResetKeywordPage() {
  return <StaticKeywordPage slug="oldera-reset" />;
}
