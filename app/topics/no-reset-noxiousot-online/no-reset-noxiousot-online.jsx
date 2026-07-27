import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-online');
}

export default function NoResetNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-online" />;
}
