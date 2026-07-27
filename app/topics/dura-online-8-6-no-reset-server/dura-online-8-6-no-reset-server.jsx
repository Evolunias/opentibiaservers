import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-6-no-reset-server');
}

export default function DuraOnline86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-6-no-reset-server" />;
}
