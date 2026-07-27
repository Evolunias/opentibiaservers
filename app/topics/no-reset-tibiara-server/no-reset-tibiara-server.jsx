import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-server');
}

export default function NoResetTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-server" />;
}
