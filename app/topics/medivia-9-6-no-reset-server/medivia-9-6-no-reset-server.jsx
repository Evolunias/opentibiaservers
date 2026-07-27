import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-no-reset-server');
}

export default function Medivia96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-no-reset-server" />;
}
