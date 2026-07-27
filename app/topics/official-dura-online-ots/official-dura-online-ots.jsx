import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-ots');
}

export default function OfficialDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-ots" />;
}
