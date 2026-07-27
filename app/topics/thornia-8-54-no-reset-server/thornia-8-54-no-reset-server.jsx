import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-no-reset-server');
}

export default function Thornia854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-no-reset-server" />;
}
