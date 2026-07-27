import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-online');
}

export default function NoResetLumineraOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-online" />;
}
