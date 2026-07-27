import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-4-no-reset-server');
}

export default function DuraOnline74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-4-no-reset-server" />;
}
