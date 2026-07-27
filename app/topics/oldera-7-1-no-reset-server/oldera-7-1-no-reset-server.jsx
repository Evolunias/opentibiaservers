import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-no-reset-server');
}

export default function Oldera71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-no-reset-server" />;
}
