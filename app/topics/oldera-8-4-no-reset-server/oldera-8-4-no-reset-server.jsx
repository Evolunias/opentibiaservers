import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-no-reset-server');
}

export default function Oldera84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-no-reset-server" />;
}
