import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-ots');
}

export default function ActiveDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-ots" />;
}
