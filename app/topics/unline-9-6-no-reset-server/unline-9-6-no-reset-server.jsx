import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-no-reset-server');
}

export default function Unline96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-no-reset-server" />;
}
