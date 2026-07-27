import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-no-reset-server');
}

export default function Evolunia15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-no-reset-server" />;
}
