import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-98-no-reset-server');
}

export default function Evolunia1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-98-no-reset-server" />;
}
