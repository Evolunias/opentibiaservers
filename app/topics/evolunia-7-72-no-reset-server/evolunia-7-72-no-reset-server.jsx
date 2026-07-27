import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-72-no-reset-server');
}

export default function Evolunia772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-72-no-reset-server" />;
}
