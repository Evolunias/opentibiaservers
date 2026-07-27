import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-ot');
}

export default function TopDuraOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-ot" />;
}
