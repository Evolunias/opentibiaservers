import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-ot-server');
}

export default function ActiveOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-ot-server" />;
}
