import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-no-reset-server');
}

export default function Oldera14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-no-reset-server" />;
}
