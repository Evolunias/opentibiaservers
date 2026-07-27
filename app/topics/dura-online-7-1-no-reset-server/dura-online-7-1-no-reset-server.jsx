import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-1-no-reset-server');
}

export default function DuraOnline71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-1-no-reset-server" />;
}
