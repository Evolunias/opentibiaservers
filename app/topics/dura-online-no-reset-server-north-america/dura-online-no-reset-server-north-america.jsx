import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-no-reset-server-north-america');
}

export default function DuraOnlineNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-no-reset-server-north-america" />;
}
