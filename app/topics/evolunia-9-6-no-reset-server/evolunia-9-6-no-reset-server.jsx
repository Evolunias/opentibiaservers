import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-no-reset-server');
}

export default function Evolunia96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-no-reset-server" />;
}
