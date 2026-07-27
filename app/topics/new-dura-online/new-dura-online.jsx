import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online');
}

export default function NewDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online" />;
}
