import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-6-no-reset-server');
}

export default function Evolunia86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-6-no-reset-server" />;
}
