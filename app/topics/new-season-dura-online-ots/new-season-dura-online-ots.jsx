import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-ots');
}

export default function NewSeasonDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-ots" />;
}
