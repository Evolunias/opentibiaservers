import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-online');
}

export default function CustomDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-online" />;
}
