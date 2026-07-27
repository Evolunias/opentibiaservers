import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-no-reset-server');
}

export default function Evolunia14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-no-reset-server" />;
}
