import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-no-reset-server');
}

export default function Oldera100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-no-reset-server" />;
}
