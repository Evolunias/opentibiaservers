import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-no-reset-server');
}

export default function Medivia14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-no-reset-server" />;
}
