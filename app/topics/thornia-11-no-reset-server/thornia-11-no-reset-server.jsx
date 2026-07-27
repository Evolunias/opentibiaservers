import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-no-reset-server');
}

export default function Thornia11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-no-reset-server" />;
}
