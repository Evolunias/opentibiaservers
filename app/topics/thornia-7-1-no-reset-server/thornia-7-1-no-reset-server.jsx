import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-1-no-reset-server');
}

export default function Thornia71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-1-no-reset-server" />;
}
