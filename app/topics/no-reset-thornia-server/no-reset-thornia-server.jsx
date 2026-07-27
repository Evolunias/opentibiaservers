import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-server');
}

export default function NoResetThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-server" />;
}
