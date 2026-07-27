import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-no-reset-server');
}

export default function Medivia15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-no-reset-server" />;
}
