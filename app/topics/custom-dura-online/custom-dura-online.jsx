import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online');
}

export default function CustomDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online" />;
}
