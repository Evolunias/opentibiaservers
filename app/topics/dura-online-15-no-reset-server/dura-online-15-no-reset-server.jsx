import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-no-reset-server');
}

export default function DuraOnline15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-no-reset-server" />;
}
