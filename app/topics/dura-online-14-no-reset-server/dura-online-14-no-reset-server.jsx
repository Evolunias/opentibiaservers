import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-no-reset-server');
}

export default function DuraOnline14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-no-reset-server" />;
}
