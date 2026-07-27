import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-no-reset-server');
}

export default function Medivia86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-no-reset-server" />;
}
