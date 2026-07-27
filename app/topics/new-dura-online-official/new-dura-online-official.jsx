import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-dura-online-official');
}

export default function NewDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-dura-online-official" />;
}
