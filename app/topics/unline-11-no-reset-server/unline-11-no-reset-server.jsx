import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-11-no-reset-server');
}

export default function Unline11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-11-no-reset-server" />;
}
