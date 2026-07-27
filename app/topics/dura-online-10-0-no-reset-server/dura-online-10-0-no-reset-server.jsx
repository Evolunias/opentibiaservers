import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-no-reset-server');
}

export default function DuraOnline100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-no-reset-server" />;
}
