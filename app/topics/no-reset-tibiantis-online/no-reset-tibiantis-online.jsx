import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-online');
}

export default function NoResetTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-online" />;
}
