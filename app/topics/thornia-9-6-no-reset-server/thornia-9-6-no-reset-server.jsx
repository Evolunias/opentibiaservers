import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-no-reset-server');
}

export default function Thornia96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-no-reset-server" />;
}
