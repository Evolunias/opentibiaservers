import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-4-no-reset-server');
}

export default function Thornia84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-4-no-reset-server" />;
}
