import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-no-reset-server');
}

export default function Evolunia76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-no-reset-server" />;
}
