import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-ot-server');
}

export default function OfficialOlderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-ot-server" />;
}
