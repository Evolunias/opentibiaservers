import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-no-reset-server');
}

export default function Evolunia74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-no-reset-server" />;
}
