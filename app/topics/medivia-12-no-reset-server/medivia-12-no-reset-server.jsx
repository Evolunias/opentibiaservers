import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-no-reset-server');
}

export default function Medivia12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-no-reset-server" />;
}
