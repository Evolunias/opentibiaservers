import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-online');
}

export default function NoResetThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-online" />;
}
