import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-no-reset-server');
}

export default function Evolunia12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-no-reset-server" />;
}
