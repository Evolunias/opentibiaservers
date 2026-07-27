import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-no-reset-server');
}

export default function Unline13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-no-reset-server" />;
}
