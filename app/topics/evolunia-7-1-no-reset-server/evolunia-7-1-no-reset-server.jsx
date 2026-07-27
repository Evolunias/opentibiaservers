import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-no-reset-server');
}

export default function Evolunia71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-no-reset-server" />;
}
