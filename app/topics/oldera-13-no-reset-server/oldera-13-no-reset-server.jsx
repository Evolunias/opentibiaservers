import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-no-reset-server');
}

export default function Oldera13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-no-reset-server" />;
}
