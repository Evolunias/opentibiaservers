import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-no-reset-server-poland');
}

export default function DuraOnlineNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-no-reset-server-poland" />;
}
