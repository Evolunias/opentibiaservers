import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-online');
}

export default function OtServersOnlineKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-online" />;
}
