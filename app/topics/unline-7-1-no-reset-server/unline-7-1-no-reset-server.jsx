import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-no-reset-server');
}

export default function Unline71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-no-reset-server" />;
}
