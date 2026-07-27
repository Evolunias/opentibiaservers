import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-no-reset-server');
}

export default function DuraOnline11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-no-reset-server" />;
}
