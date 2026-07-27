import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-client');
}

export default function NoResetTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-client" />;
}
