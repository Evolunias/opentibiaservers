import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-no-reset-server');
}

export default function Medivia13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-no-reset-server" />;
}
