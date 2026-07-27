import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-official');
}

export default function OfficialDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-official" />;
}
