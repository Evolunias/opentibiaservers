import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-no-reset-server');
}

export default function Thornia81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-no-reset-server" />;
}
