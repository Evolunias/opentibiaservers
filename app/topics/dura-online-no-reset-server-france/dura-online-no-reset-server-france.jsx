import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-no-reset-server-france');
}

export default function DuraOnlineNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-no-reset-server-france" />;
}
