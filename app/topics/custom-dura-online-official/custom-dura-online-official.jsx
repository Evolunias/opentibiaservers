import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-official');
}

export default function CustomDuraOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-official" />;
}
