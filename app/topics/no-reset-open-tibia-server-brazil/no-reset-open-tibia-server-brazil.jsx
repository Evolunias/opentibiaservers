import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-brazil');
}

export default function NoResetOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-brazil" />;
}
