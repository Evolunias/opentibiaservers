import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-no-reset-server');
}

export default function Thornia14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-no-reset-server" />;
}
