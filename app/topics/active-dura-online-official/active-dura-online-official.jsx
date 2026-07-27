import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-official');
}

export default function ActiveDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-official" />;
}
