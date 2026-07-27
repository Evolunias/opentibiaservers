import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-client');
}

export default function NoResetTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-client" />;
}
