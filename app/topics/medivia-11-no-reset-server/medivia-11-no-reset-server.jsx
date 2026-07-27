import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-no-reset-server');
}

export default function Medivia11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-no-reset-server" />;
}
