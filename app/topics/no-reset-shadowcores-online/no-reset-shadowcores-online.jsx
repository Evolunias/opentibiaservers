import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-online');
}

export default function NoResetShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-online" />;
}
