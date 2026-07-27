import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-no-reset-server');
}

export default function DuraOnline13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-no-reset-server" />;
}
