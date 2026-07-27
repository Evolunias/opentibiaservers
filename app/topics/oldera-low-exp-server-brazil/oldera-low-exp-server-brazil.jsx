import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-brazil');
}

export default function OlderaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-brazil" />;
}
