import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-official');
}

export default function BestDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-official" />;
}
