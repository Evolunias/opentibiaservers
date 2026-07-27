import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-no-reset-server');
}

export default function Oldera11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-no-reset-server" />;
}
