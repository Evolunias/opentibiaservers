import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-no-reset-server');
}

export default function Thornia12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-no-reset-server" />;
}
