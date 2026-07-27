import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-no-reset-server');
}

export default function Evolunia13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-no-reset-server" />;
}
