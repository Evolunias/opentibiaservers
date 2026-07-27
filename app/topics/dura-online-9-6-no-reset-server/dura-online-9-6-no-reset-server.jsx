import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-9-6-no-reset-server');
}

export default function DuraOnline96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-9-6-no-reset-server" />;
}
