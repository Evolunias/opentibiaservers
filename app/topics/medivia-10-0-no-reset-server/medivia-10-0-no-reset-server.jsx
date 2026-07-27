import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-no-reset-server');
}

export default function Medivia100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-no-reset-server" />;
}
