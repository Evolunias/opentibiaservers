import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-official');
}

export default function PopularDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-official" />;
}
