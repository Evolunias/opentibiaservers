import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-online');
}

export default function NewDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-online" />;
}
