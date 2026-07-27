import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-6-no-reset-server');
}

export default function Oldera76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-6-no-reset-server" />;
}
