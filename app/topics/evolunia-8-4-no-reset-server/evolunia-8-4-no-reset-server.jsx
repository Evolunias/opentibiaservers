import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-no-reset-server');
}

export default function Evolunia84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-no-reset-server" />;
}
