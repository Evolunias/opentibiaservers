import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-15-no-reset-server');
}

export default function Unline15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="unline-15-no-reset-server" />;
}
