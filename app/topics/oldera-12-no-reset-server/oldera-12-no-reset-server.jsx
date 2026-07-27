import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-no-reset-server');
}

export default function Oldera12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-no-reset-server" />;
}
