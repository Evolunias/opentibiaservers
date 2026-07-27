import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-no-reset-server');
}

export default function Oldera15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-no-reset-server" />;
}
