import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-no-reset-server');
}

export default function Medivia81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-no-reset-server" />;
}
