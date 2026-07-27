import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-no-reset-server');
}

export default function Unline74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-no-reset-server" />;
}
