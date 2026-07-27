import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-official');
}

export default function FreshStartDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-official" />;
}
