import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-ot-server');
}

export default function NoResetNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-ot-server" />;
}
