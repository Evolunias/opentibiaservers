import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-official');
}

export default function TopDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-official" />;
}
