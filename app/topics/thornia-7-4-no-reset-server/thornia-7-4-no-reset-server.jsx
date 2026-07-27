import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-4-no-reset-server');
}

export default function Thornia74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-4-no-reset-server" />;
}
