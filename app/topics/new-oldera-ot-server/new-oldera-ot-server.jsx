import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-ot-server');
}

export default function NewOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-ot-server" />;
}
