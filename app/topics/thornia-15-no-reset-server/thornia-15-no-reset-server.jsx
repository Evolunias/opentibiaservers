import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-no-reset-server');
}

export default function Thornia15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-no-reset-server" />;
}
