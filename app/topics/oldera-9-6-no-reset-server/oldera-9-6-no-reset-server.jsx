import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-no-reset-server');
}

export default function Oldera96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-no-reset-server" />;
}
