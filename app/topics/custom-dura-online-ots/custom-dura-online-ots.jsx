import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-ots');
}

export default function CustomDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-ots" />;
}
